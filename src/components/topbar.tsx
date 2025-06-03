import Image from "next/image";
import { Button } from "./ui/button";
import { HomeIcon } from "lucide-react";
import { ReactNode } from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export function Topbar() {
    return (
        <div className="w-full h-16 bg-background">
            <TopbarHeader />
        </div>
    );
}

function TopbarHeader() {
    return (
        <header className="w-full h-full flex items-center justify-between px-4">
            <div className="flex items-center justify-between gap-4">
                <HeaderLogo />
                <HeaderNavigation />
            </div>
            <div></div>
        </header>
    );
}

function HeaderLogo() {
    return (
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
                <Image src="/vercel.svg" alt="Logo" width={18} height={18} />
            </Button>
        </div>
    );
}

interface NavigationItem {
    title: string;
    href: string;
    icon: ReactNode;
    description?: string;
    children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
    {
        title: "编码转码",
        href: "/",
        icon: <HomeIcon size={16} />,
        children: [
            {
                title: "Unicode编码",
                href: "/",
                description: "Unicode与中文互转，在文本框里输入要转换的内容，然后点击要转换的类型按钮，转换完成后即可看到对应的内容。",
                icon: <HomeIcon size={16} />,
            },
            {
                title: "UTF-8编码",
                href: "/",
                description: "UTF-8编码在线转工具可以帮助你把中文转换成UTF-8编码，同时也支持把UTF-8编码过的还原成中文。",
                icon: <HomeIcon size={16} />,
            },
            {
                title: "URL编码/解码",
                href: "/",
                description: "中文的URL可以使用，您可以使用本工具对中文进行UrlEncode编码。",
                icon: <HomeIcon size={16} />,
            },
            {
                title: "进制转换",
                href: "/",
                description: "在线进制转换",
                icon: <HomeIcon size={16} />,
            },
        ]
    },
    {
        title: "加密/解密",
        href: "/",
        icon: <HomeIcon size={16} />,
        children: [
            {
                title: "Base加密解密",
                href: "/encoder/base64",
                description: "Base加密解密指的是基于Base编码规则的加密和解密操作。 ",
                icon: <HomeIcon size={16} />,
            },
            {
                title: "MD5加密",
                href: "/",
                description: "它能将任意长度的数据经过运算后，生成固定长度为 128 位（通常以 32 位十六进制数字表示）的哈希值。",
                icon: <HomeIcon size={16} />,
            },
            {
                title: "URL加密",
                href: "/",
                description: "在用户登录某网站时，登录请求的 URL 中若包含用户名和密码等信息，对该 URL 加密后传输，可避免密码等关键信息泄露。",
                icon: <HomeIcon size={16} />,
            },
        ]
    },
    {
        title: "单位换算",
        href: "/",
        icon: <HomeIcon size={16} />,
    },
    {
        title: "代码格式化",
        href: "/",
        icon: <HomeIcon size={16} />,
        children: [
            { title: "JS/HTML格式化", description: "可以把混乱的代码进行分行，整齐的显示出来。", href: "/", icon: <HomeIcon size={16} /> },
            { title: "CSS格式化", description: "可以把混乱的代码进行分行，整齐的显示出来。", href: "/", icon: <HomeIcon size={16} /> },
            { title: "JSON格式化/校验", description: "可以把混乱的代码进行分行，整齐的显示出来。", href: "/", icon: <HomeIcon size={16} /> },
            { title: "SQL压缩/格式化", description: "可以把混乱的代码进行分行，整齐的显示出来。", href: "/", icon: <HomeIcon size={16} /> },
            { title: "JSON压缩转义", description: "可以把混乱的代码进行分行，整齐的显示出来。", href: "/", icon: <HomeIcon size={16} /> },
            { title: "JSON生成实体类", description: "可以把混乱的代码进行分行，整齐的显示出来。", href: "/", icon: <HomeIcon size={16} /> },
            { title: "JSON在线编辑器", description: "可以把混乱的代码进行分行，整齐的显示出来。", href: "/", icon: <HomeIcon size={16} /> },
        ]
    }
]

function HeaderNavigation() {
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                {navigationItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                        <NavigationMenuTrigger>
                            <div className="flex items-center justify-center gap-2">
                                {item.icon}{item.title}
                            </div>
                        </NavigationMenuTrigger>
                        {
                            item.children && <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    {item.children.map((item, index) => (
                                        <ListItem key={index} href={item.href} title={item.title}>
                                            {item.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        }
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}