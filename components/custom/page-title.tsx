import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Define the type for individual breadcrumb items
type BreadcrumbItemProps = {
  href?: string;  // Optional URL for the breadcrumb link
  label: string;  // Display label for the breadcrumb
};

// Define the props type for the CustomBreadcrumb component
type CustomBreadcrumbProps = {
  items: BreadcrumbItemProps[];  // Array of breadcrumb items
};

const CustomBreadcrumb: React.FC<CustomBreadcrumbProps> = ({ items }) => {
  return (
    <Breadcrumb className='mb-4'>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.href ? (
                <BreadcrumbLink className='text-lg tex-gray-500 font-semibold' href={item.href}>{item.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage className='font-semibold text-[#192339] text-lg'>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
