import {Container} from "@/app/ui/container";
import {youngSerif} from "@/app/ui/fonts";
import {TableCell, TableHead, TableHeader, TableRow, Table} from "@/components/ui/table";

const NutritionTable = () => {
    return (
        <Container className={'space-y-4'} variant={'default'}>
            <h1 className={`${youngSerif.className} text-orange-950 text-xl`}>Nutritions</h1>
            <p>The table below shows nutritional values per serving without the additional fillings.</p>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Calories</TableHead>
                        <TableCell className={'nutrition'}>277kcal</TableCell>
                    </TableRow>
                </TableHeader>
                <TableHeader>
                    <TableRow>
                        <TableHead>Carbs</TableHead>
                        <TableCell className={'nutrition'}>0g</TableCell>
                    </TableRow>
                </TableHeader>
                <TableHeader>
                    <TableRow>
                        <TableHead>Protein</TableHead>
                        <TableCell className={'nutrition'}>20g</TableCell>
                    </TableRow>
                </TableHeader>
                <TableHeader>
                    <TableRow>
                        <TableHead>Fat</TableHead>
                        <TableCell className={'nutrition'}>22g</TableCell>
                    </TableRow>
                </TableHeader>
            </Table>
        </Container>
    )
}

export default NutritionTable;