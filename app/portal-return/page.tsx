"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Settings } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PortalReturnPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/upmatch-logo.png" alt="UpMatch" width={32} height={32} className="rounded-lg" />
            <span className="text-xl font-bold">UpMatch</span>
          </Link>
        </div>
      </header>

      {/* Portal Return Content */}
      <div className="flex items-center justify-center min-h-[80vh] px-4">
        <Card className="bg-gray-800 border-gray-700 max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-[#2DE37D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings className="w-8 h-8 text-[#2DE37D]" />
            </div>

            <h1 className="text-2xl font-bold mb-4 text-slate-200">Subscription Updated</h1>
            <p className="text-gray-300 mb-6">
              You've finished managing your subscription. Return to the UpMatch extension to continue using your Pro
              features.
            </p>

            <div className="space-y-4">
              <Button
                className="w-full bg-[#2DE37D] hover:bg-[#25c470] text-gray-900 font-semibold"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.close()
                  }
                }}
              >
                Close This Page
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2025 UpMatch. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
