import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              © 2025 Jomar S. Alberastine. All rights reserved.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <span>Built using React, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}