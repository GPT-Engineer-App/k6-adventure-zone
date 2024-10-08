import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const CatBreed = ({ name, description, rating, onRatingChange }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle className="flex justify-between items-center">
        <span>{name}</span>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-5 h-5 cursor-pointer ${
                star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
              onClick={() => onRatingChange(star)}
            />
          ))}
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Index = () => {
  const [catBreeds, setCatBreeds] = useState([
    { name: "Siamese", description: "Known for their distinctive color points and blue eyes.", rating: 0 },
    { name: "Maine Coon", description: "One of the largest domestic cat breeds, known for their intelligence and playful personality.", rating: 0 },
    { name: "Persian", description: "Recognized for their long fur and flat faces.", rating: 0 },
  ]);

  const handleRatingChange = (index, newRating) => {
    const updatedBreeds = [...catBreeds];
    updatedBreeds[index].rating = newRating;
    setCatBreeds(updatedBreeds);
  };

  const catImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1200px-Kittyply_edit1.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center text-purple-800">All About Cats</h1>
        
        <Carousel className="mb-8">
          <CarouselContent>
            {catImages.map((src, index) => (
              <CarouselItem key={index}>
                <img
                  src={src}
                  alt={`Cat ${index + 1}`}
                  className="mx-auto object-cover w-full h-[400px] rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Tabs defaultValue="breeds" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="breeds">Breeds</TabsTrigger>
            <TabsTrigger value="care">Care</TabsTrigger>
            <TabsTrigger value="facts">Fun Facts</TabsTrigger>
          </TabsList>
          <TabsContent value="breeds">
            <h2 className="text-2xl font-semibold mb-4 text-purple-700">Popular Cat Breeds</h2>
            {catBreeds.map((breed, index) => (
              <CatBreed
                key={index}
                name={breed.name}
                description={breed.description}
                rating={breed.rating}
                onRatingChange={(newRating) => handleRatingChange(index, newRating)}
              />
            ))}
          </TabsContent>
          <TabsContent value="care">
            <h2 className="text-2xl font-semibold mb-4 text-purple-700">Cat Care Tips</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide a balanced diet suitable for your cat's age and health condition</li>
              <li>Ensure fresh water is always available</li>
              <li>Regular grooming to keep their coat healthy</li>
              <li>Schedule regular check-ups with a veterinarian</li>
              <li>Offer plenty of playtime and mental stimulation</li>
            </ul>
          </TabsContent>
          <TabsContent value="facts">
            <h2 className="text-2xl font-semibold mb-4 text-purple-700">Fun Cat Facts</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cats sleep for about 70% of their lives</li>
              <li>A group of cats is called a "clowder"</li>
              <li>Cats have over 20 different vocalizations</li>
              <li>A cat's sense of smell is 14 times stronger than a human's</li>
              <li>The first cat in space was a French cat named Felicette in 1963</li>
            </ul>
          </TabsContent>
        </Tabs>

        <p className="text-xl text-purple-700 mb-6">
          Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their
          independence, agility, and affectionate nature. Cats come in various breeds, each with its unique
          characteristics and personalities.
        </p>
      </div>
    </div>
  );
};

export default Index;
