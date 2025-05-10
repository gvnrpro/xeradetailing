
import React, { useEffect, useState } from 'react';

export interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings?: TableOfContentsItem[];
  containerSelector?: string;
  headingSelectors?: string;
  items?: TableOfContentsItem[];
}

const TableOfContents = ({ 
  headings, 
  containerSelector, 
  headingSelectors,
  items
}: TableOfContentsProps) => {
  const [toc, setToc] = useState<TableOfContentsItem[]>(headings || items || []);

  useEffect(() => {
    // If items are provided directly, use them
    if (items && items.length > 0) {
      setToc(items);
      return;
    }
    
    // If headings are provided directly, use them
    if (headings && headings.length > 0) {
      setToc(headings);
      return;
    }
    
    if (!containerSelector || !headingSelectors) {
      return;
    }
    
    // Generate TOC from DOM if containerSelector and headingSelectors are provided
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    const headingElements = container.querySelectorAll(headingSelectors);
    
    const generatedItems: TableOfContentsItem[] = Array.from(headingElements).map((heading, index) => {
      const id = heading.id || `heading-${index}`;
      if (!heading.id) {
        heading.id = id;
      }
      
      return {
        id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.replace('H', ''), 10)
      };
    });
    
    setToc(generatedItems);
  }, [containerSelector, headingSelectors, headings, items]);

  if (!toc || toc.length === 0) {
    return null;
  }
  
  return (
    <div className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-4">
      <h3 className="text-lg font-bold mb-3">Table of Contents</h3>
      <nav>
        <ul className="space-y-1">
          {toc.map((item) => (
            <li 
              key={item.id} 
              style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
            >
              <a 
                href={`#${item.id}`}
                className="text-white/70 hover:text-xera-red transition-colors text-sm block py-1"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;
