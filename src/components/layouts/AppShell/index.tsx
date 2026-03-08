import Navbar from "../navbar";
import { useRouter } from "next/router";

const disableNavbar = ["views/auth/login", "views/auth/register"];

type AppShellProps = {
    children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    const { pathname } = useRouter();
    return (
    <main>
        {disableNavbar.includes(pathname) && <Navbar />}
        {children}
        <footer>
        <div>Footer</div>
        </footer>
    </main>

    );
};

export default AppShell;