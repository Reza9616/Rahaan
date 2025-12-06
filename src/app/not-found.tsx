'use client'
import { motion } from "framer-motion";
import { Home, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2
            }}
            className="relative"
          >
            <SearchX className="h-24 w-24 text-muted-foreground/50" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-6xl font-bold text-primary">404</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-3"
          >
            <h1 className="text-3xl font-semibold text-primary">
              صفحه مورد نظر یافت نشد
            </h1>
            <p className="text-muted-foreground max-w-md">
              متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا به آدرس دیگری منتقل شده است.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/">
              <Button size="lg" className="gap-2">
                <Home className="h-4 w-4" />
                بازگشت به صفحه اصلی
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}

