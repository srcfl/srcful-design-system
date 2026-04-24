/**
 * Serve the root-level DESIGN.md at https://design.sourceful.energy/DESIGN.md.
 *
 * The canonical file lives at the repo root so GitHub renders it on the
 * project page. We can't symlink it into /public/ reliably on Vercel, so
 * we read it at build time here. `dynamic = "force-static"` means the
 * file is inlined into the static output, cheap as a flat asset.
 */

import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";

export async function GET() {
  const filePath = path.join(process.cwd(), "DESIGN.md");
  const body = await readFile(filePath, "utf8");

  return new Response(body, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": "public, max-age=300, s-maxage=3600",
    },
  });
}
