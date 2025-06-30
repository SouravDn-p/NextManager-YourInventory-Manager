import Link from "next/link";
import {
  Package,
  Users,
  ShoppingCart,
  TrendingUp,
  Plus,
  ArrowUpRight,
  Star,
  Zap,
  Shield,
  BarChart3,
} from "lucide-react";
import Button from "./components/ui/button";
import Card from "./components/ui/card";
import CardHeader from "./components/ui/cardHeader";
import CardTitle from "./components/ui/card/cardTitle";
import CardDescription from "./components/ui/card/CardDescription";
import CardContent from "./components/ui/cardContent";
import Badge from "./components/ui/badge";
import DashboardOverview from "./components/home/DashboardOverview";

export default function HomePage() {
  const stats = [
    {
      title: "Total Products",
      value: "1,234",
      description: "+20.1% from last month",
      icon: Package,
      color: "text-blue-400",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      glowColor: "shadow-blue-500/20",
    },
    {
      title: "Active Users",
      value: "573",
      description: "+180.1% from last month",
      icon: Users,
      color: "text-purple-400",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      glowColor: "shadow-purple-500/20",
    },
    {
      title: "Sales",
      value: "$12,234",
      description: "+19% from last month",
      icon: ShoppingCart,
      color: "text-green-400",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      glowColor: "shadow-green-500/20",
    },
    {
      title: "Revenue",
      value: "$45,231",
      description: "+201 since last hour",
      icon: TrendingUp,
      color: "text-orange-400",
      bgGradient: "from-orange-500/20 to-red-500/20",
      glowColor: "shadow-orange-500/20",
    },
  ];

  const recentProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      stock: 45,
      price: "$99.99",
      status: "In Stock",
      trend: "up",
    },
    {
      id: 2,
      name: "Smart Watch",
      stock: 23,
      price: "$199.99",
      status: "Low Stock",
      trend: "down",
    },
    {
      id: 3,
      name: "Laptop Stand",
      stock: 67,
      price: "$49.99",
      status: "In Stock",
      trend: "up",
    },
    {
      id: 4,
      name: "USB-C Cable",
      stock: 156,
      price: "$19.99",
      status: "In Stock",
      trend: "up",
    },
  ];

  const features = [
    {
      title: "Smart Analytics",
      description:
        "Get real-time insights into your inventory performance with advanced analytics and reporting.",
      icon: BarChart3,
      color: "text-blue-400",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Automated Alerts",
      description:
        "Never run out of stock with intelligent alerts and automated reorder suggestions.",
      icon: Zap,
      color: "text-yellow-400",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
    },
    {
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security with 99.9% uptime guarantee and automatic backups.",
      icon: Shield,
      color: "text-green-400",
      bgGradient: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-6 animate-pulse">
              <Star className="mr-1 h-3 w-3" />
              New Features Available
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Welcome to InventoryPro
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your inventory management with our cutting-edge platform
              designed for modern businesses
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link href="/products">
              <Button size="lg" className="group cursor-pointer">
                <Package className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Explore Products
                <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                size="lg"
                variant="outline"
                className="group cursor-pointer"
              >
                <BarChart3 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Dashboard
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  variant="glass"
                  className={`text-center hover:shadow-2xl ${stat.glowColor} shadow-xl group cursor-pointer`}
                >
                  <CardContent className="p-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${stat.bgGradient} mx-auto mb-3 w-fit group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.title}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto py-16 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Dashboard Overview */}
          <DashboardOverview />

          {/* Features Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                Powerful Features
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Everything you need to manage your inventory efficiently and
                scale your business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    variant="glass"
                    className="text-center hover:shadow-2xl transition-all duration-500 group"
                  >
                    <CardHeader>
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-r ${feature.bgGradient} mx-auto mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`h-8 w-8 ${feature.color}`} />
                      </div>
                      <CardTitle className="group-hover:text-blue-300 transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card variant="gradient" className="p-12">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Ready to Transform Your Inventory?
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Join thousands of businesses already using InventoryPro to
                  streamline their operations and boost productivity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/register">
                    <Button
                      size="lg"
                      variant="success"
                      className="cursor-pointer"
                    >
                      <Plus className="mr-2 h-5 w-5" />
                      Get Started Free
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button
                      size="lg"
                      variant="outline"
                      className="cursor-pointer"
                    >
                      <Package className="mr-2 h-5 w-5" />
                      Explore Features
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
