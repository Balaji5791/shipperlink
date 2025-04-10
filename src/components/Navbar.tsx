
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Truck, Building2, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, translate } = useLanguage();

  return (
    <header className="border-b bg-white sticky top-0 z-40">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Truck className="h-6 w-6 text-primary" />
            <span>Miles Worth</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            {translate("Home")}
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium hover:text-primary">
            {translate("How It Works")}
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary">
            {translate("About Us")}
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary">
            {translate("Contact")}
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle 
            currentLanguage={language}
            onChange={setLanguage}
          />
          <Link to="/login">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              {translate("Log In")}
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-primary text-white hover:bg-primary-600">
              {translate("Sign Up")}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 pt-6">
              <div className="flex items-center justify-between mb-6">
                <Link to="/" className="flex items-center gap-2 font-bold text-xl" onClick={() => setIsOpen(false)}>
                  <Truck className="h-6 w-6 text-primary" />
                  <span>Miles Worth</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="flex flex-col gap-4">
                <Link to="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  {translate("Home")}
                </Link>
                <Link to="/how-it-works" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  {translate("How It Works")}
                </Link>
                <Link to="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  {translate("About Us")}
                </Link>
                <Link to="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  {translate("Contact")}
                </Link>
              </div>
              <div className="mt-6 space-y-3">
                <LanguageToggle 
                  currentLanguage={language}
                  onChange={setLanguage}
                />
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    {translate("Log In")}
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary text-white hover:bg-primary-600">
                    {translate("Sign Up")}
                  </Button>
                </Link>
              </div>
              <div className="flex gap-4 mt-6">
                <Link to="/register?type=driver" className="flex-1" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full h-auto py-4 flex flex-col gap-2 items-center">
                    <Truck className="h-6 w-6" />
                    <span>{translate("I'm a Driver")}</span>
                  </Button>
                </Link>
                <Link to="/register?type=company" className="flex-1" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full h-auto py-4 flex flex-col gap-2 items-center">
                    <Building2 className="h-6 w-6" />
                    <span>{translate("I'm a Company")}</span>
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
