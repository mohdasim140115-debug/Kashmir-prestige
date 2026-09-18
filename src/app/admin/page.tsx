import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getSiteContent, isDatabaseConfigured } from "@/lib/content";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const content = await getSiteContent();

  return (
    <AdminDashboard
      initialContent={content}
      databaseConfigured={isDatabaseConfigured()}
      uploadsConfigured={Boolean(process.env.UPSTASH_BLOB_TOKEN)}
    />
  );
}
