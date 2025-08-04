import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/camp/create",
  "/404",
  "/profile",
]);

const isProtectedRoute = createRouteMatcher([
  "/favorits(.*)", // Note: "favorits" matches your actions.ts spelling
  "/camp(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  try {
    // Allow public routes
    if (isPublicRoute(req)) {
      console.log(`Public route accessed: ${req.nextUrl.pathname}`);
      return;
    }

    // Protect /favorites/* and /camp/* (except /camp/create)
    if (isProtectedRoute(req) && req.nextUrl.pathname !== "/camp/create") {
      console.log(`Protecting route: ${req.nextUrl.pathname}`);
      await auth.protect();
    }
  } catch (err) {
    console.error("Auth error in middleware:", err);
    throw err; // Throw to surface in Vercel logs
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};