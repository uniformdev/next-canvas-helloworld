import { useRouter } from "next/router";
import { useCallback } from "react";
import { useCompositionEventEffect } from "@uniformdev/canvas-react";

export function useLivePreviewNextStaticProps(options) {
  const router = useRouter();

  const effect = useCallback(() => {
    // replacing the route with itself makes Next re-run getStaticProps
    router.replace(router.asPath, undefined, { scroll: false });
  }, [router]);

  // useCompositionEventEffect runs a callback when changes are made to the composition
  return useCompositionEventEffect({
    ...options,
    enabled: router.isPreview,
    effect,
  });
}
