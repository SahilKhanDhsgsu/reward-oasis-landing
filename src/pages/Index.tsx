import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star, ShoppingBag, Gift, CreditCard, Users, Shield, CheckCircle, Store, UserCheck, ArrowRight, TrendingUp, Wallet, Award } from "lucide-react";

const Index = () => {
  const [userLoginOpen, setUserLoginOpen] = useState(false);
  const [sellerLoginOpen, setSellerLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <Gift className="w-5 h-5 md:w-7 md:h-7 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">RewardHub</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 font-medium transition-all hover:scale-105">Home</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-green-600 font-medium transition-all hover:scale-105">How It Works</a>
            <a href="#login" className="text-gray-700 hover:text-green-600 font-medium transition-all hover:scale-105">Login</a>
            <a href="#rewards" className="text-gray-700 hover:text-green-600 font-medium transition-all hover:scale-105">Rewards</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium transition-all hover:scale-105">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-2 md:space-x-3">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2 md:px-6 md:py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all text-sm md:text-base">
              Get Started
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
            </Button>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section id="home" className="py-12 md:py-20 lg:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-orange-500/5 animate-pulse-glow"></div>
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-10 animate-fade-in">
              <div className="space-y-4 lg:space-y-6">
                <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 lg:px-6 lg:py-3 text-xs lg:text-sm font-semibold rounded-full shadow-lg animate-float">
                  🎉 Limited Time: Get $25 cashback on your first purchase!
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight">
                  Earn <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 animate-pulse-glow">Massive</span> 
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Cashback</span> 
                  <br />
                  Every Purchase
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                  Transform your shopping into a rewarding experience. Get up to 25% cashback, exclusive discounts, and premium rewards from 2,000+ top brands.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 lg:px-10 lg:py-6 rounded-2xl font-bold text-base lg:text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110">
                  Start Earning Now
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 lg:px-10 lg:py-6 rounded-2xl font-bold text-base lg:text-lg transition-all hover:scale-105">
                  Watch Demo
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-12 pt-4 lg:pt-8">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-black text-gray-900">150K+</div>
                  <div className="text-xs lg:text-sm text-gray-600 font-medium">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-black text-gray-900">$5M+</div>
                  <div className="text-xs lg:text-sm text-gray-600 font-medium">Cashback Paid</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-black text-gray-900">2000+</div>
                  <div className="text-xs lg:text-sm text-gray-600 font-medium">Brand Partners</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in mt-8 lg:mt-0">
              <div className="relative bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 rounded-3xl p-6 lg:p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl animate-float">
                  <span className="text-white font-black text-sm lg:text-xl">$125</span>
                </div>
                <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-14 h-14 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl animate-float" style={{animationDelay: '1.5s'}}>
                  <Gift className="w-6 h-6 lg:w-10 lg:h-10 text-white" />
                </div>
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
                  <div className="space-y-4 lg:space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-bold text-base lg:text-lg">Your Rewards Dashboard</span>
                      <Badge className="bg-green-100 text-green-700 font-bold text-xs lg:text-sm">Premium</Badge>
                    </div>
                    <div className="space-y-3 lg:space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium text-sm lg:text-base">This Month's Cashback</span>
                        <span className="font-black text-green-600 text-lg lg:text-xl">$247.50</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium text-sm lg:text-base">Reward Points</span>
                        <span className="font-black text-orange-600 text-lg lg:text-xl">4,850 pts</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium text-sm lg:text-base">Total Savings</span>
                        <span className="font-black text-blue-600 text-lg lg:text-xl">$1,234.90</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full shadow-inner">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full w-4/5 shadow-lg"></div>
                    </div>
                    <p className="text-xs lg:text-sm text-gray-500 text-center font-medium">80% to next reward tier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section id="login" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Access Your Account</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of smart shoppers and sellers already earning with RewardHub
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Floating Dashboard Visualization */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Main Dashboard Card */}
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 hover:shadow-3xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Dashboard Overview</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm opacity-90">Total Earned</p>
                          <p className="text-2xl font-bold">$1,247</p>
                        </div>
                        <Wallet className="w-8 h-8 opacity-80" />
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-4 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm opacity-90">Points</p>
                          <p className="text-2xl font-bold">8,450</p>
                        </div>
                        <Award className="w-8 h-8 opacity-80" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <ShoppingBag className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Amazon Purchase</p>
                          <p className="text-xs text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                      <span className="text-green-600 font-bold">+$12.50</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <CreditCard className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Cashback Redeemed</p>
                          <p className="text-xs text-gray-500">1 day ago</p>
                        </div>
                      </div>
                      <span className="text-blue-600 font-bold">$50.00</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl animate-float">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-float" style={{animationDelay: '1s'}}>
                  <span className="text-white font-black text-lg">25%</span>
                </div>
              </div>
            </div>
            
            {/* Login Options */}
            <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
              {/* User Login Card */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-white to-green-50/30">
                <CardContent className="p-6 lg:p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <UserCheck className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">User Portal</h3>
                        <p className="text-gray-600 font-medium">Start earning rewards today</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="font-medium">Earn up to 25% cashback</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="font-medium">Exclusive member discounts</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="font-medium">Instant reward notifications</span>
                      </div>
                    </div>
                    
                    <Dialog open={userLoginOpen} onOpenChange={setUserLoginOpen}>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all">
                          Access User Portal
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle className="text-center text-2xl font-bold text-gray-900">Welcome Back!</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="user-email">Email</Label>
                            <Input id="user-email" type="email" placeholder="Enter your email" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="user-password">Password</Label>
                            <Input id="user-password" type="password" placeholder="Enter your password" />
                          </div>
                          <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl">
                            Sign In
                          </Button>
                          <p className="text-center text-sm text-gray-600">
                            Don't have an account? <a href="#" className="text-green-600 hover:underline font-semibold">Sign up</a>
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
              
              {/* Seller Login Card */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-white to-blue-50/30">
                <CardContent className="p-6 lg:p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Store className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Seller Dashboard</h3>
                        <p className="text-gray-600 font-medium">Grow your business with us</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        <span className="font-medium">Access to 150K+ customers</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        <span className="font-medium">Advanced analytics dashboard</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        <span className="font-medium">Competitive commission rates</span>
                      </div>
                    </div>
                    
                    <Dialog open={sellerLoginOpen} onOpenChange={setSellerLoginOpen}>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all">
                          Access Seller Dashboard
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle className="text-center text-2xl font-bold text-gray-900">Seller Portal</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="seller-email">Business Email</Label>
                            <Input id="seller-email" type="email" placeholder="Enter your business email" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="seller-password">Password</Label>
                            <Input id="seller-password" type="password" placeholder="Enter your password" />
                          </div>
                          <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl">
                            Access Dashboard
                          </Button>
                          <p className="text-center text-sm text-gray-600">
                            New partner? <a href="#" className="text-blue-600 hover:underline font-semibold">Join as seller</a>
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Start earning rewards in just three simple steps. It's that easy!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-105">
                <ShoppingBag className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900">1. Shop</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                Browse and shop from over 1,000+ partner stores through our platform
              </p>
            </div>
            
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-105">
                <CreditCard className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900">2. Earn Points</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                Automatically earn points and cashback on every purchase you make
              </p>
            </div>
            
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-105">
                <Gift className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900">3. Redeem Rewards</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                Use your points for discounts, gift cards, or cash out your earnings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Overview Section */}
      <section id="rewards" className="py-16 md:py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Amazing Rewards Await</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the incredible benefits of being a RewardHub member
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Up to 15% Cashback</h3>
                <p className="text-gray-600">Earn instant cashback on purchases from top retailers</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Exclusive Discounts</h3>
                <p className="text-gray-600">Access member-only deals and promotional offers</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Instant Rewards</h3>
                <p className="text-gray-600">Get immediate points and cashback notifications</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Trusted by Thousands</h2>
            <p className="text-lg md:text-xl text-gray-600">See what our happy customers have to say</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "I've earned over $500 in cashback this year! RewardHub makes saving money so easy."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">S</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Johnson</div>
                    <div className="text-sm text-gray-600">Regular Shopper</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "The exclusive discounts are amazing! I save money on every purchase through RewardHub."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Mike Chen</div>
                    <div className="text-sm text-gray-600">Tech Enthusiast</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Simple, reliable, and rewarding. RewardHub has become my go-to for online shopping."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">E</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Emily Davis</div>
                    <div className="text-sm text-gray-600">Frequent Buyer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-lg md:text-xl text-gray-600">Everything you need to know about RewardHub</p>
          </div>
          
          <div className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I start earning rewards?</h3>
                    <p className="text-gray-600">Simply sign up for free, browse our partner stores, and start shopping. You'll automatically earn points and cashback on every purchase.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">When do I receive my cashback?</h3>
                    <p className="text-gray-600">Cashback is typically credited to your account within 24-48 hours after your purchase is confirmed by the retailer.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a minimum payout amount?</h3>
                    <p className="text-gray-600">You can cash out your earnings once you reach $10. There are no fees for cashing out your rewards.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-green-500 to-green-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Ready to Start Earning Rewards?
            </h2>
            <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
              Join thousands of smart shoppers who are already earning cashback and discounts on every purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold text-base lg:text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Join Now - It's Free!
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold text-base lg:text-lg transition-all">
                Learn More
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 pt-4 text-green-100">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Secure & Safe</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>50K+ Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Always Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="col-span-2 md:col-span-1 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Gift className="w-3 h-3 md:w-5 md:h-5 text-white" />
                </div>
                <span className="text-lg md:text-xl font-bold">RewardHub</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base">
                Earn cashback and discounts on every purchase. Start saving today!
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-base md:text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-white transition-colors text-sm md:text-base">Home</a>
                <a href="#how-it-works" className="block text-gray-400 hover:text-white transition-colors text-sm md:text-base">How It Works</a>
                <a href="#rewards" className="block text-gray-400 hover:text-white transition-colors text-sm md:text-base">Rewards</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors text-sm md:text-base">Contact</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-base md:text-lg font-semibold">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm md:text-base">Help Center</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm md:text-base">Terms of Service</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm md:text-base">Privacy Policy</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm md:text-base">FAQ</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-base md:text-lg font-semibold">Contact</h3>
              <div className="space-y-2 text-gray-400 text-sm md:text-base">
                <p>support@rewardhub.com</p>
                <p>1-800-REWARDS</p>
                <p>Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-400 text-sm md:text-base">
            <p>&copy; 2024 RewardHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
