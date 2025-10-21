'use client';

import { useState } from "react";
// import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
// import { trpc } from "@/lib/trpc";
import { Globe, Lock, Users, X, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

type VisibilityType = "public" | "private" | "friends";

export default function CreatePost() {
  const router = useRouter();
  const user = { name: "John Doe", email: "johndoe@gmail.com" };
  const [content, setContent] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [visibility, setVisibility] = useState<VisibilityType>("public");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  //   const createPostMutation = trpc.posts.create.useMutation({
  //     onSuccess: () => {
  //       setContent("");
  //       setImages([]);
  //       setPreviewImages([]);
  //       router.push("/feed");
  //     },
  //   });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPreviews: string[] = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            newPreviews.push(event.target.result as string);
            if (newPreviews.length === files.length) {
              setPreviewImages([...previewImages, ...newPreviews]);
            }
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setPreviewImages(previewImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!content.trim()) return;

    setIsSubmitting(true);
    try {
      //   await createPostMutation.mutateAsync({
      //     content,
      //     images: previewImages,
      //     visibility,
      //   });
    } finally {
      setIsSubmitting(false);
    }
  };

  const visibilityOptions = [
    { value: "public" as VisibilityType, label: "Public", icon: Globe },
    { value: "friends" as VisibilityType, label: "Friends", icon: Users },
    { value: "private" as VisibilityType, label: "Private", icon: Lock },
  ];

  return (
    <div className="min-h-screen rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="text-slate-600 hover:text-slate-900 flex items-center gap-2 mb-4 transition-colors"
          >
            <span>←</span>
            <span>Back</span>
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Create Post
          </h1>
          <p className="text-slate-600 mt-2">
            Share your thoughts with the world
          </p>
        </div>

        {/* Main Card */}
        <Card className="shadow-lg border-0">
          <div className="p-6 md:p-8">
            {/* User Info */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                {user?.name?.charAt(0) || "U"}
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  {user?.name || "User"}
                </p>
                <p className="text-sm text-slate-500">
                  @{user?.email?.split("@")[0] || "user"}
                </p>
              </div>
            </div>

            {/* Content Textarea */}
            <div className="mb-6">
              <Textarea
                placeholder="What's on your mind.."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-32 text-lg placeholder:text-slate-400 resize-none border-slate-200 focus:border-blue-500 focus:ring-blue-500"
              />
              <p className="text-xs text-slate-500 mt-2">
                {content.length} characters
              </p>
            </div>

            {/* Image Preview Gallery */}
            {previewImages.length > 0 && (
              <div className="mb-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {previewImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border border-slate-200"
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={16} />
                      </button>
                      {previewImages.length > 3 && index === 2 && (
                        <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-xl">
                            +{previewImages.length - 3}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Image Upload Button */}
            <div className="mb-6">
              <label className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-slate-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-colors group">
                <Plus
                  size={20}
                  className="text-slate-500 group-hover:text-blue-500"
                />
                <span className="text-slate-600 group-hover:text-blue-600 font-medium">
                  Add images
                </span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Visibility Selector */}
            <div className="mb-8 pb-8 border-b border-slate-200">
              <p className="text-sm font-semibold text-slate-900 mb-3">
                Who can see this?
              </p>
              <div className="flex flex-wrap gap-3">
                {visibilityOptions.map(({ value, label, icon: Icon }) => (
                  <button
                    key={value}
                    onClick={() => setVisibility(value)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      visibility === value
                        ? "bg-blue-500 text-white shadow-md"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    <Icon size={18} />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              //   disabled={!content.trim() || isSubmitting || createPostMutation.isPending}
              className="w-full py-3 text-lg font-bold rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isSubmitting ? "Creating..." : "Create post"}
            </Button>

            {/* {createPostMutation.isError && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                Failed to create post. Please try again.
              </div>
            )} */}
          </div>
        </Card>
      </div>
    </div>
  );
}
