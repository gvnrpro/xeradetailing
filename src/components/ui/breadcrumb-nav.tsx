
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage
} from '@/components/ui/breadcrumb';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbNavProps {
  items?: {
    label: string;
    href: string;
  }[];
  currentPage?: string;
}

const BreadcrumbNav = ({ items = [], currentPage }: BreadcrumbNavProps) => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  // Generate breadcrumb items from URL if not explicitly provided
  const breadcrumbItems = items.length > 0 ? items : pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
    // Convert kebab-case to title case
    const label = segment.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    return { label, href: path };
  });

  return (
    <div className="sticky top-0 z-30 w-full bg-background/90 backdrop-blur-sm border-b border-xera-lightgray py-2 px-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="flex items-center">
                <Home className="h-3.5 w-3.5 mr-1" />
                <span>Home</span>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbSeparator>
                <ChevronRight className="h-3.5 w-3.5" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                {index === breadcrumbItems.length - 1 && !currentPage ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={item.href}>{item.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          ))}
          
          {currentPage && (
            <>
              <BreadcrumbSeparator>
                <ChevronRight className="h-3.5 w-3.5" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>{currentPage}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbNav;
