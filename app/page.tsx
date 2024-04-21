import {Container} from "@/app/ui/container";
import {youngSerif, inter} from "@/app/ui/fonts";
import omellete from '@/public/recipe-page-main/assets/images/image-omelette.jpeg'
import Image from "next/image";
import {PreparationTime, Instructions, Ingredients} from "@/lib/data";
import NutritionTable from "@/app/components/table";

export default function RecipePage() {
  return (
      <div className={'flex justify-center'}>
          <div className={'bg-white rounded-xl w-[600px] md:p-4 md:m-6'}>
              <Image src={omellete} alt={'Simple-Omellete'} width={0} height={0}
                     className={'w-full h-36 md:rounded-xl md:h-52'}/>
              <div className={'p-4'}>
                  <h1 className={`${youngSerif.className} text-orange-950 font-semibold text-2xl py-3`}>Simple Omelette
                      Recipe</h1>
                  <p className={'text-color text-xs'}>An easy and quick dish, perfect for any meal.
                      This classic omelette
                      combines beaten eggs cooked to perfection,optionally filled with your choice of cheese,
                      vegetables, or
                      meats. </p>
              </div>
              <Container className={'space-y-4'} variant={'secondary'}>
                  <h1 className={'text-orange-950 text-[14px]'}>Preparation Time</h1>
                  {
                      PreparationTime.map((list) => (
                          <li className={'pl-4 m-6'} key={list[0]}><span
                              className={'instruction'}>{list[0]}</span>{list[1]}</li>
                      ))
                  }
              </Container>
              <Container className={'space-y-4 border-b-2'} variant={'default'}>
                  <h1 className={`${youngSerif.className} text-orange-950 text-xl`}>Ingredients</h1>
                  {
                      Ingredients.map((list) => (
                          <li className={'pl-4 m-6'} key={list}>{list}</li>
                      ))
                  }
              </Container>
              <Container className={'space-y-4 border-b-2'} variant={'default'}>
                  <h1 className={`${youngSerif.className} text-orange-950 text-xl`}>Instructions</h1>
                  {
                      Instructions.map((list) => (
                          <li className={'pl-4 m-6'} key={list[0]}><span
                              className={'instruction'}>{list[0]}</span>{list[1]}</li>
                      ))
                  }
              </Container>
              <NutritionTable />
          </div>
      </div>
  )
}