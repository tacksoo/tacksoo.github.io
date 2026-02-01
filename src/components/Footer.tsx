export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="content-container">
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Dr. Tacksoo Im. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
