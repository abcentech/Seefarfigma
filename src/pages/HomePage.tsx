import {
  ArrowRight,
  BookOpen,
  Video,
  BarChart3,
  Shield,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "../components/ui/card";

export function HomePage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: t.infoHub.title,
      description: t.infoHub.subtitle,
      href: "/info-hub",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: t.campaigns.title,
      description: t.campaigns.subtitle,
      href: "/campaigns",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t.training.title,
      description:
        "Interactive micro-learning modules and certifications",
      href: "/training",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: t.analytics.title,
      description:
        "Track engagement and platform usage insights",
      href: "/analytics",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center space-y-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl">
            SAFE-MIT Digital Platform
          </h1>
          <p className="text-xl text-gray-600">
            Empowering safe and informed migration decisions
            through accessible information, training, and
            community support across Nigeria, Senegal, Morocco,
            and Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild>
              <a href="/info-hub" className="gap-2">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#features">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2>Platform Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access comprehensive resources designed to support
              you throughout your migration journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all cursor-pointer"
                onClick={() =>
                  (window.location.href = feature.href)
                }
              >
                <CardHeader>
                  <div
                    className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}
                  >
                    {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="gap-2 group-hover:gap-3 transition-all"
                  >
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 bg-blue-50 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2 text-blue-600">
                4
              </div>
              <p className="text-gray-600">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl mb-2 text-blue-600">
                45K+
              </div>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div>
              <div className="text-4xl mb-2 text-blue-600">
                12K+
              </div>
              <p className="text-gray-600">
                Training Enrollments
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2 text-blue-600">
                234K+
              </div>
              <p className="text-gray-600">
                Resources Accessed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Language Support */}
      <section className="px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-2xl">
                <h2 className="text-white mb-4">
                  Available in 4 Languages
                </h2>
                <p className="text-blue-100 mb-6">
                  Access all content in English, French, Arabic,
                  and Swahili to ensure information is
                  accessible to everyone.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "English",
                    "Français",
                    "العربية",
                    "Kiswahili",
                  ].map((lang) => (
                    <div
                      key={lang}
                      className="px-4 py-2 bg-white/20 rounded-full"
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 pb-16">
        <div className="container mx-auto text-center space-y-6 max-w-3xl">
          <h2>Ready to Begin Your Journey?</h2>
          <p className="text-gray-600">
            Start exploring trusted migration information and
            resources tailored to your country.
          </p>
          <Button size="lg" asChild>
            <a href="/info-hub" className="gap-2">
              Access Information Hub
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}