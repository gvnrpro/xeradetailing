
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { trackEvent } from '../tracking/AnalyticsProvider';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  containerSelector?: string;
  headingSelectors?: string;
  title?: string;
  className?: string;
  maxDepth?: number;
}

const TableOfContents = ({
  containerSelector = 'article',
  headingSelectors = 'h2, h3, h4',
  title = 'Table of Contents',
  className = '',
  maxDepth = 3
}: TableOfContentsProps) => {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  
  useEffect(() => {
    const generateToc = () => {
      const container = document.querySelector(containerSelector);
      if (!container) return;
      
      const headings = container.querySelectorAll(headingSelectors);
      const items: TocItem[] = [];
      
      headings.forEach((heading, index) => {
        const headingElement = heading as HTMLHeadingElement;
        const level = parseInt(headingElement.tagName.charAt(1));
        
        // Skip if beyond max depth
        if (level > maxDepth) return;
        
        let id = headingElement.id;
        
        // Generate an ID if it doesn't exist
        if (!id) {
          id = `toc-heading-${index}`;
          headingElement.id = id;
        }
        
        items.push({
          id,
          text: headingElement.textContent || '',
          level
        });
      });
      
      setTocItems(items);
    };
    
    // Generate TOC on mount
    generateToc();
    
    // Set up intersection observer for active heading tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -80% 0px',
        threshold: [0.1, 0.5, 1]
      }
    );
    
    // Observe all headings
    tocItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });
    
    return () => observer.disconnect();
  }, [containerSelector, headingSelectors, maxDepth]);
  
  if (tocItems.length === 0) return null;
  
  const trackTocClick = (id: string, text: string) => {
    trackEvent('toc_link_click', {
      heading_id: id,
      heading_text: text,
      page: window.location.pathname
    });
  };
  
  return (
    <motion.aside
      className={`bg-xera-darkgray border border-xera-lightgray rounded-lg p-4 mb-6 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="text-lg font-bold mb-3">{title}</h4>
      <nav>
        <ul className="space-y-1">
          {tocItems.map((item, index) => (
            <li 
              key={index} 
              className={`transition-colors ${item.level === 2 ? 'font-medium' : 'text-sm pl-3'} ${
                activeId === item.id ? 'text-xera-red' : 'text-white/70 hover:text-white'
              }`}
              style={{ marginLeft: `${(item.level - 2) * 12}px` }}
            >
              <Link 
                to={`#${item.id}`}
                onClick={() => trackTocClick(item.id, item.text)}
                className="block py-1 transition-colors hover:text-xera-red"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  );
};

export default TableOfContents;
