import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        
        <p className="mb-8 text-gray-700">
          Welcome to our website! We are a team of passionate developers creating amazing web applications with Next.js and React.
          Our mission is to deliver high-quality, user-friendly solutions that meet our clients' needs.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <Button size="small" shape="rounded-sm" variant="primary">
            Learn More
          </Button>
          
          <Button size="medium" shape="rounded-md" variant="secondary">
            Our Services
          </Button>
          
          <Button size="large" shape="rounded-full" variant="primary">
            Contact Us
          </Button>
        </div>
      </main>
    </div>
  );
}