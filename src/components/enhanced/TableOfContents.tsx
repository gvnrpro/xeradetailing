
import React from 'react';
import { Link } from 'react-router-dom';

export interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TableOfContentsItem[];
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  if (!headings || headings.length === 0) {
    return null;
  }
  
  return (
    <div className="bg-xera-darkgray border border-xera-lightgray rounded-lg p-4">
      <h3 className="text-lg font-bold mb-3">Table of Contents</h3>
      <nav>
        <ul className="space-y-1">
          {headings.map((item) => (
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
