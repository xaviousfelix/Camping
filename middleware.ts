import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/camp/create",
  "/404",
  "/profile",
]);

const isProtectedRoute = createRouteMatcher([
  "/favorits(.*)",
  "/camp(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  try {
    if (isPublicRoute(req)) {
      console.log(`Public route accessed: ${req.nextUrl.pathname}`);
      return;
    }
    if (isProtectedRoute(req) && req.nextUrl.pathname !== "/camp/create") {
      console.log(`Protecting route: ${req.nextUrl.pathname}`);
      await auth.protect();
    }
  } catch (err) {
    console.error("Auth error in middleware:", err);
    throw err;
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};