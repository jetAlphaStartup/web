"use client";
import React, { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import toast from "react-hot-toast";

interface AppDownloadButtonProps {
  apkUrl: string;
  appName: string;
  version: string;
}

export const AppDownloadButton: React.FC<AppDownloadButtonProps> = ({
  apkUrl,
  appName,
  version,
}) => {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownload = async () => {
    const toastId = toast.loading("Starting download...");

    try {
      setDownloading(true);
      setProgress(0);

      const response = await fetch(apkUrl);
      if (!response.ok) throw new Error("Download failed");

      const contentLength = response.headers.get("content-length");
      const total = parseInt(contentLength || "0", 10);
      const reader = response.body?.getReader();

      if (!reader) throw new Error("Unable to read file");

      let receivedLength = 0;
      const chunks: Uint8Array[] = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        chunks.push(value);
        receivedLength += value.length;
        const currentProgress = Math.min((receivedLength / total) * 100, 100);
        setProgress(currentProgress);

        // Update loading toast message with progress
        toast.loading(`Downloading... ${currentProgress.toFixed(0)}%`, {
          id: toastId,
        });
      }

      const blob = new Blob(chunks, {
        type: "application/vnd.android.package-archive",
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${appName}-v${version}.apk`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success("Download completed successfully!", { id: toastId });
    } catch (error) {
      toast.error("Download failed. Please try again.", { id: toastId });
      console.error("Download error:", error);
    } finally {
      setDownloading(false);
      setProgress(0);
    }
  };

  return (
    <div className="space-y-4 w-full">
      <Button
        onClick={handleDownload}
        disabled={downloading}
        className="bg-[#181818]  max-w-40 flex items-center justify-center gap-x-2 font-bold h-[50px] my-8 hover:bg-black rounded-2xl"
        size="lg"
      >
        {downloading ? (
          <>
            <Loader2
              className="animate-spin w-5 h-5 text-white flex-shrink-0"
              size={20}
            />
            Downloading...
          </>
        ) : (
          <>
            <Download size={20} className="w-5 h-5 text-white flex-shrink-0" />
            Download APK
          </>
        )}
      </Button>

      {downloading && <Progress value={progress} className="w-full" />}
    </div>
  );
};
