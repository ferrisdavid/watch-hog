"use client";

// Auth.
import { signOut } from "next-auth/react";

// Mantine.
import { Menu } from "@mantine/core";

// Props.
interface Props {
  children: React.ReactNode;
  username?: string | null;
}

export default function ProfileDropdown({ children, username }: Props) {
  if (!username) return <></>;

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>{children}</Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>{username}</Menu.Label>

        <Menu.Item>Friends</Menu.Item>
        <Menu.Item>Profile</Menu.Item>

        <Menu.Divider />

        <Menu.Item color="red" onClick={() => signOut()}>
          Sign Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
