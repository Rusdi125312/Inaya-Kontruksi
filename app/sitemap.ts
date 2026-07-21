import { MetadataRoute } from 'next';
import { databases } from '@/lib/appwrite';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://inaya-konstruksi.com';

  try {
    // 1. Ambil data proyek dari Appwrite
    const proyekData = await databases.listDocuments('6a26e72000382e4d6a68', 'proyek');

    // 2. Petakan ke URL dinamis (Sesuaikan /projek/ atau /proyek/ dengan nama folder Anda)
    const proyekEntries = proyekData.documents.map((p) => ({
      url: `${baseUrl}/projek/${p.$id}`,
      lastModified: new Date(),
    }));

    // 3. Gabungkan halaman statis dan dinamis
    return [
      { url: baseUrl, lastModified: new Date() },
      { url: `${baseUrl}/about`, lastModified: new Date() },
      { url: `${baseUrl}/layanan`, lastModified: new Date() },
      { url: `${baseUrl}/portfolio`, lastModified: new Date() },
      { url: `${baseUrl}/projek`, lastModified: new Date() },
      { url: `${baseUrl}/kontak`, lastModified: new Date() },
      ...proyekEntries,
    ];
  } catch (error) {
    console.error('Sitemap fetch error:', error);

    // Fallback jika database Appwrite bermasalah / offline
    return [
      { url: baseUrl, lastModified: new Date() },
      { url: `${baseUrl}/about`, lastModified: new Date() },
      { url: `${baseUrl}/layanan`, lastModified: new Date() },
      { url: `${baseUrl}/portfolio`, lastModified: new Date() },
      { url: `${baseUrl}/projek`, lastModified: new Date() },
      { url: `${baseUrl}/kontak`, lastModified: new Date() },
    ];
  }
}