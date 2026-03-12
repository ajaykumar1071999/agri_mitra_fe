import AdminNavbar from '@/components/admin/navbar/page';
import AdminSidebar from '@/components/admin/navbar/sidebar/page';
import { ReactNode } from 'react';

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex flex-col justify-start item-start min-h-screen border-2 border-green-300">
        <AdminNavbar />
        <div className="flex w-full border border-red-600">
          <div className="w-70  ">
            <AdminSidebar />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
