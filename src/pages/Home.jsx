import Card from "../components/Card";
import Carousel from "../components/Carousel";
import yarnscrochetImg from "../assets/images/crochetImg.jpg";
import crochetTopImg from "../assets/images/crochetTop1.jpg";
import crochetTopImg2 from "../assets/images/crochetTop2.jpg";

function HomePage() {
  return (
    <>
      <Carousel />
      <div className="flex flex-wrap mt-10 gap-3 sm: flex-row flex-2">
        <Card
          src={yarnscrochetImg}
          altText="Yarnscrochet"
          title="Granny Square Blanket"
          description="Granny Square Blanket: by Chitrangi"
          price={95}
        />
        <Card
          src={crochetTopImg2}
          altText="Yarnscrochet"
          title="Granny Square Blanket"
          description="Granny Square Blanket: by Chitrangi"
          price={42}
        />
        <Card
          src={crochetTopImg}
          altText="Crochet Shirt"
          title="Summer Crochet Shirt"
          description="Crochet Shirt: by Chitrangi"
          price={56}
        />
      </div>
    </>
  );
}

export default HomePage;
