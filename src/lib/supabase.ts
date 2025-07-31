@@ .. @@
 const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
 const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
 
 if (!supabaseUrl || !supabaseAnonKey) {
-  console.error('Missing Supabase environment variables:', {
-    url: !!supabaseUrl,
-    key: !!supabaseAnonKey
-  });
-  throw new Error('Missing Supabase environment variables. Please check your .env file.');
+  if (import.meta.env.DEV) {
+    console.error('Missing Supabase environment variables:', {
+      url: !!supabaseUrl,
+      key: !!supabaseAnonKey
+    });
+    throw new Error('Missing Supabase environment variables. Please check your .env file.');
+  }
 }