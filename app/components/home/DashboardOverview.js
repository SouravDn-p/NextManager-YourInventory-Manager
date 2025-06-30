"use client";
import React from "react";
import Button from "../ui/button";
import Link from "next/link";
import Badge from "../ui/badge";
import { Package, Plus } from "lucide-react";
import CardContent from "../ui/cardContent";
import CardDescription from "../ui/card/CardDescription";
import CardTitle from "../ui/card/cardTitle";
import CardHeader from "../ui/cardHeader";
import Card from "../ui/card";
import { useGetProductsQuery } from "@/redux/api/productapi";

const DashboardOverview = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  const recentProducts = data?.data || [];

  return (
    <div>
      {/* Dashboard Overview */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Dashboard Overview
            </h2>
            <p className="mt-2 text-gray-400">
              Monitor your inventory performance in real-time
            </p>
          </div>
          <Link href="/products/add">
            <Button variant="success" className="mt-4 md:mt-0 cursor-pointer">
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </Link>
        </div>

        {/* Recent Products */}
        <Card variant="gradient" className="mb-12">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <Package className="mr-2 h-6 w-6 text-blue-400" />
                  Recent Products
                </CardTitle>
                <CardDescription>
                  Latest items in your inventory
                </CardDescription>
              </div>
              <Link href="/products">
                <Button variant="outline" size="sm" className="cursor-pointer">
                  View All
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProducts.slice(0, 5).map((product) => (
                <div
                  key={product._id}
                  className="flex items-center justify-between p-4 border border-gray-700/50 rounded-xl hover:bg-gray-800/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-gray-600/50">
                      <Package className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white group-hover:text-blue-300 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {product.stock} units in stock
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-medium text-green-400">
                        {product.price}
                      </p>
                      <Badge
                        variant={
                          product.status === "In Stock"
                            ? "success"
                            : "secondary"
                        }
                      >
                        {product.status}
                      </Badge>
                    </div>
                    <Link href={`/products/${product._id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="cursor-pointer"
                      >
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
