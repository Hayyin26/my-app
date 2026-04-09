import { useRouter } from "next/router";
import Navbar from "../Navbar";

const disableNavbar = ["/auth/login", "/auth/register", "/404"];
type AppShellProps = {
    children: React.ReactNode;
}

const AppShell = (props: AppShellProps) => {
    const { children } = props;

    const { pathname } = useRouter();

    return (
        <main>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
            <div className="footer">
                <p>Copyright &copy; 2026 - Praktikum Next.js Pages Router</p>
            </div>
        </main>
    );
}

export default AppShell;