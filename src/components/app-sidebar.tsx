import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SignOut } from "./sign-out"



const items = [
    {
        title: "Home",
        url: "/dashboard",
        icon: Home,
        items: [
            {
                title: "Inbox",
                url: "/dashboard",
                icon: Inbox,
            },
            {
                title: "Inbox",
                url: "#",
                icon: Inbox,
            },
            {
                title: "Inbox",
                url: "#",
                icon: Inbox,
            },
        ]
    },
    {
        title: "Inbox",
        url: "/dashboard/documents",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>Header</SidebarHeader>
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <a href={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter>
<SignOut/>
            </SidebarFooter>
        </Sidebar>
    )
}
