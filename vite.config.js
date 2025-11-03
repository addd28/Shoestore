import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⚠️ Chú ý: nếu repo GitHub là https://github.com/addd28/Shoestore
export default defineConfig({
  plugins: [react()],
  base: "/Shoestore/" // ← bắt buộc để gh-pages load đúng đường dẫn
});
