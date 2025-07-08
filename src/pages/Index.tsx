
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star, ShoppingBag, Gift, CreditCard, Users, Shield, CheckCircle, Store, UserCheck, ArrowRight } from "lucide-react";

const Index = () => {
  const [userLoginOpen, setUserLoginOpen] = useState(false);
  const [sellerLoginOpen, setSellerLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <Gift className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">RewardHub</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 font-medium transition-all hover:scale-105">Home</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-green-600 font-medium transition-all hover:scale-105">How It Works</a>
            <a href="#rewards" className="text-gray-700 hover:text-green-600 font-medium transition-all hover:scale-105">Rewards</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium transition-all hover:scale-105">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Dialog open={userLoginOpen} onOpenChange={setUserLoginOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 font-semibold transition-all hover:scale-105">
                  <UserCheck className="w-4 h-4 mr-2" />
                  User Login
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

            <Dialog open={sellerLoginOpen} onOpenChange={setSellerLoginOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold transition-all hover:scale-105">
                  <Store className="w-4 h-4 mr-2" />
                  Seller Login
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

            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section id="home" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-orange-500/5 animate-pulse-glow"></div>
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 animate-fade-in">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-6 py-3 text-sm font-semibold rounded-full shadow-lg animate-float">
                  🎉 Limited Time: Get $25 cashback on your first purchase!
                </Badge>
                <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                  Earn <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 animate-pulse-glow">Massive</span> 
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Cashback</span> 
                  <br />
                  Every Purchase
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Transform your shopping into a rewarding experience. Get up to 25% cashback, exclusive discounts, and premium rewards from 2,000+ top brands.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-6 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110">
                  Start Earning Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-10 py-6 rounded-2xl font-bold text-lg transition-all hover:scale-105">
                  Watch Demo
                </Button>
              </div>
              
              <div className="flex items-center space-x-12 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-gray-900">150K+</div>
                  <div className="text-sm text-gray-600 font-medium">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-gray-900">$5M+</div>
                  <div className="text-sm text-gray-600 font-medium">Cashback Paid</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-gray-900">2000+</div>
                  <div className="text-sm text-gray-600 font-medium">Brand Partners</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="relative bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl animate-float">
                  <span className="text-white font-black text-xl">$125</span>
                </div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl animate-float" style={{animationDelay: '1s'}}>
                  <Gift className="w-10 h-10 text-white" />
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-bold text-lg">Your Rewards Dashboard</span>
                      <Badge className="bg-green-100 text-green-700 font-bold">Premium</Badge>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">This Month's Cashback</span>
                        <span className="font-black text-green-600 text-xl">$247.50</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Reward Points</span>
                        <span className="font-black text-orange-600 text-xl">4,850 pts</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Total Savings</span>
                        <span className="font-black text-blue-600 text-xl">$1,234.90</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full shadow-inner">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full w-4/5 shadow-lg"></div>
                    </div>
                    <p className="text-sm text-gray-500 text-center font-medium">80% to next reward tier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start earning rewards in just three simple steps. It's that easy!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-105">
                <ShoppingBag className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">1. Shop</h3>
              <p className="text-gray-600">
                Browse and shop from over 1,000+ partner stores through our platform
              </p>
            </div>
            
            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-105">
                <CreditCard className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">2. Earn Points</h3>
              <p className="text-gray-600">
                Automatically earn points and cashback on every purchase you make
              </p>
            </div>
            
            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-105">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">3. Redeem Rewards</h3>
              <p className="text-gray-600">
                Use your points for discounts, gift cards, or cash out your earnings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Overview Section */}
      <section id="rewards" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Amazing Rewards Await</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Trusted by Thousands</h2>
            <p className="text-xl text-gray-600">See what our happy customers have to say</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about RewardHub</p>
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

      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Start Earning Rewards?
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Join thousands of smart shoppers who are already earning cashback and discounts on every purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Join Now - It's Free!
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-all">
                Learn More
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 pt-4 text-green-100">
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

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Gift className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">RewardHub</span>
              </div>
              <p className="text-gray-400">
                Earn cashback and discounts on every purchase. Start saving today!
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="#how-it-works" className="block text-gray-400 hover:text-white transition-colors">How It Works</a>
                <a href="#rewards" className="block text-gray-400 hover:text-white transition-colors">Rewards</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Help Center</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">FAQ</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>support@rewardhub.com</p>
                <p>1-800-REWARDS</p>
                <p>Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RewardHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
