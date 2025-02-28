import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { UserForm } from "@/features/users/components/UserForm";
import { UserTable } from "@/features/users/components/UserTable";
import type { User } from "@shared/schema";

export default function Home() {
  const [editingId, setEditingId] = useState<number | null>(null);

  const { data: users = [], isLoading } = useQuery<User[]>({
    queryKey: ["/api/users"],
  });

  const handleEdit = (user: User) => {
    setEditingId(user.id);
  };

  const handleSuccess = () => {
    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <UserForm
          editingId={editingId}
          onSuccess={handleSuccess}
          defaultValues={users.find((u) => u.id === editingId)}
        />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <UserTable users={users} onEdit={handleEdit} />
        )}
      </div>
    </div>
  );
}