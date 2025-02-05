import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";

const AboutUs = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-white border-white text-base">
          About Us
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#151226] text-white/70 text-sm">
        <DialogTitle className="text-2xl text-white">About Us</DialogTitle>
        <DialogDescription className="sr-only">About the project</DialogDescription>
        <p>
          The idea for this came from a common frustration: finding a{" "}
          <span className="font-semibold text-slate-50">
            reliable, up-to-date resource for ACTIVE and UPCOMING grant opportunities.
          </span>
          Many existing databases are static, created once and forgotten. We wanted to change that
          by ensuring this database stays relevant and genuinely useful for Web3 projects seeking
          funding.
        </p>
        <p>
          This is just version 1 of what we are building—simple yet functional. We wanted to share
          it with the community as{" "}
          <span className="font-semibold text-slate-50">
            we continue to work on a more advanced and polished version that will include additional
            features and improvements!
          </span>
        </p>
        <p>
          This database is made available as one of the free resources provided by{" "}
          <a
            href="http://www.cornarolabs.xyz"
            target="_blank"
            className="text-blue-500 hover:underline">
            Cornaro Labs
          </a>{" "}
          and{" "}
          <a
            href="https://www.blackvogel.com/"
            target="_blank"
            className="text-blue-500 hover:underline">
            BlackVogel Consulting.
          </a>
        </p>
      </DialogContent>
    </Dialog>
  );
};
export default AboutUs;
