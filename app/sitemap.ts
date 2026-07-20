import { MetadataRoute } from 'next';
import { databases } from '@/lib/appwrite'; // Pastikan path import benar

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Mengambil data dari database
    const [proyekData, pekerjaanData] = await Promise.all([
      databases.listDocuments('6a26e72000382e4d6a68', 'proyek'),
      databases.listDocuments('6a26e72000382e4d6a68', 'pekerjaan'),
    ]);

    const proyekEntries = proyekData.documents.map((p) => ({
      url: `https://inaya-konstruksi.com/proyek/${p.$id}`,
      lastModified: new Date(),
    }));

    const pekerjaanEntries = pekerjaanData.documents.map((p) => ({
      url: `https://inaya-konstruksi.com/pekerjaan/${p.$id}`,
      lastModified: new Date(),
    }));

    return [
      { url: 'https://inaya-konstruksi.com', lastModified: new Date() },
      { url: 'https://inaya-konstruksi.com/about', lastModified: new Date() },
      ...proyekEntries,
      ...pekerjaanEntries,
    ];
  } catch (error) {
    // Jika gagal ambil data, tetap kembalikan halaman utama
    return [{ url: 'https://inaya-konstruksi.com', lastModified: new Date() }];
  }
}