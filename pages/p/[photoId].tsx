import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Carousel from "../../components/Carousel";
import getResults from "../../utils/cachedImages";
import getBase64ImageUrl from "../../utils/generateBlurPlaceholder";
import { getImageTitle } from "../../utils/imageConfig";
import type { ImageProps } from "../../utils/types";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  const { photoId } = router.query;
  
  useEffect(() => {
    // Redirect to modal view
    router.replace(`/?photoId=${photoId}`);
  }, [photoId, router]);
  
  return <div>Redirecting...</div>;
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const results = await getResults();

  let reducedResults: ImageProps[] = [];
  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const currentPhoto = reducedResults.find(
    (img) => img.id === Number(context.params.photoId),
  );
  currentPhoto.blurDataUrl = getBase64ImageUrl(currentPhoto);

  return {
    props: {
      currentPhoto: currentPhoto,
    },
  };
};

export async function getStaticPaths() {
  const results = await getResults();

  let fullPaths = [];
  for (let i = 0; i < results.resources.length; i++) {
    fullPaths.push({ params: { photoId: i.toString() } });
  }

  return {
    paths: fullPaths,
    fallback: false,
  };
}