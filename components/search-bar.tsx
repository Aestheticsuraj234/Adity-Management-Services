"use client"
import { useEffect, useState } from "react";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";

export const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    }

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down)
  }, []);

  const onClick = () => {
    setOpen(false);
  }

  const searchBarData = [
    {
      ID: 1,
      name: "Home",
      onClick: () => router.push("/"),
    },
    {
      ID: 2,
      name: "About",
      // Add the submenu items for "About"
      submenu: [
        {
          ID: 3,
          name: "Our Teams",
          onClick: () => router.push("/About/Our-Team"),
        },
        {
          ID: 4,
          name: "Company Profile",
          onClick: () => router.push("/About/Company-Profile"),
        },
        {
          ID: 5,
          name: "Mission & Vision",
          onClick: () => router.push("/About/Our-Mission-Vision"),
        },
      ],
    },
    {
      ID: 6,
      name: "Our Services",
      onClick: () => router.push("/our-services"),
    },
    {
      ID: 7,
      name: "Contact Us",
      onClick: () => router.push("/contact-us"),
    },
  ];

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="group w-64 h-10 rounded-md px-4 py-1 border flex flex-row justify-between items-center hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition"
        // Adjust the height and padding values as needed
      >
        <p
          className="font-semibold text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition"
        >
          Search
        </p>
        <kbd
          className="pointer-events-none inline-flex h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto"
        >
          <span className="text-lg">⌘</span>K
        </kbd>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search About-us" />
        <CommandList>
          <CommandEmpty>No Results found</CommandEmpty>
          {searchBarData.map((item) => (
            <CommandGroup key={item.ID} heading={item.name}>
              {item.submenu
                ? item.submenu.map((submenuItem) => (
                    <CommandItem
                      key={submenuItem.ID}
                      onSelect={() => submenuItem.onClick()}
                    >
                     
                      <span>{submenuItem.name}</span>
                    </CommandItem>
                  ))
                : null}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};
