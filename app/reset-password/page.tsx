"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Eye,
  EyeOff,
  Lock,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { updatePassword } from "../../lib/supabase";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(true);
  const [error, setError] = useState("");

  const passwordRequirements = [
    { text: "At least 8 characters", met: password.length >= 8 },
    { text: "Contains uppercase letter", met: /[A-Z]/.test(password) },
    { text: "Contains lowercase letter", met: /[a-z]/.test(password) },
    { text: "Contains number", met: /\d/.test(password) },
    {
      text: "Contains special character",
      met: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
  ];

  const isPasswordValid = passwordRequirements.every((req) => req.met);
  const doPasswordsMatch = password === confirmPassword && password.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isPasswordValid) {
      setError("Please meet all password requirements");
      return;
    }

    if (!doPasswordsMatch) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await updatePassword(password);

      setSuccess(true);
    } catch (err) {
      setError(
        (err as Error).message || "Failed to reset password. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
        <Card className="bg-gray-800 border-gray-700 max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-[#2DE37D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#2DE37D]" />
            </div>

            <h1 className="text-2xl font-bold mb-4  text-slate-200">
              Password Reset Successful!
            </h1>
            <p className="text-gray-300 mb-6">
              Your password has been successfully updated. You can now sign in
              with your new password.
            </p>

            <Button
              className="w-full bg-[#2DE37D] hover:bg-[#25c470] text-gray-900 font-semibold"
              onClick={() => window.close()}
            >
              Close This Page
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/upmatch-logo.png"
              alt="UpMatch"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-xl font-bold">UpMatch</span>
          </Link>
        </div>
      </header>

      {/* Reset Password Form */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8">
        <Card className="bg-gray-800 border-gray-700 max-w-md w-full">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-[#2DE37D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-[#2DE37D]" />
            </div>
            <CardTitle className="text-2xl font-bold text-white">
              Reset Your Password
            </CardTitle>
            <p className="text-gray-300 mt-2">
              Enter your new password below. Make sure it's strong and secure.
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* New Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">
                  New Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white pr-10 focus:border-[#2DE37D] focus:ring-[#2DE37D]"
                    placeholder="Enter your new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Password Requirements */}
              {password && (
                <div className="space-y-2">
                  <p className="text-sm text-gray-300">
                    Password requirements:
                  </p>
                  <div className="space-y-1">
                    {passwordRequirements.map((req, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <CheckCircle
                          className={`w-4 h-4 ${
                            req.met ? "text-[#2DE37D]" : "text-gray-500"
                          }`}
                        />
                        <span
                          className={
                            req.met ? "text-[#2DE37D]" : "text-gray-400"
                          }
                        >
                          {req.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-white">
                  Confirm New Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white pr-10 focus:border-[#2DE37D] focus:ring-[#2DE37D]"
                    placeholder="Confirm your new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Password Match Indicator */}
                {confirmPassword && (
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle
                      className={`w-4 h-4 ${
                        doPasswordsMatch ? "text-[#2DE37D]" : "text-gray-500"
                      }`}
                    />
                    <span
                      className={
                        doPasswordsMatch ? "text-[#2DE37D]" : "text-gray-400"
                      }
                    >
                      Passwords match
                    </span>
                  </div>
                )}
              </div>

              {/* Error Alert */}
              {error && (
                <Alert className="bg-red-900/20 border-red-800 text-red-300">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!isPasswordValid || !doPasswordsMatch || isLoading}
                className="w-full bg-[#2DE37D] hover:bg-[#25c470] text-gray-900 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                    <span>Updating Password...</span>
                  </div>
                ) : (
                  "Update Password"
                )}
              </Button>
            </form>

            {/* Back to Sign In */}
            <div className="text-center pt-4 border-t border-gray-700">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 text-gray-400 hover:text-[#2DE37D] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Homepage</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2025 UpMatch. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
