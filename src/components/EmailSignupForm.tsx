
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface EmailSignupFormProps {
  buttonText?: string;
  className?: string;
  darkBg?: boolean;
}

const EmailSignupForm = ({ 
  buttonText = "Join Waitlist", 
  className = "",
  darkBg = false
}: EmailSignupFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 w-full max-w-md ${className}`}>
      <Input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`flex-grow ${darkBg ? 'bg-white/10 text-white border-white/20 placeholder:text-white/70' : ''}`}
        required
      />
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="bg-accent hover:bg-accent/90 text-black font-medium"
      >
        {isSubmitting ? "Processing..." : buttonText}
      </Button>
    </form>
  );
};

export default EmailSignupForm;
