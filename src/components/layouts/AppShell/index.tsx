import Navbar from "../Navbar";

type AppShellProps = {
    children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    return (
    <main>
        <Navbar />
        {children}
        <footer>
        <div>Footer</div>
        </footer>
    </main>

    );
};

export default AppShell;