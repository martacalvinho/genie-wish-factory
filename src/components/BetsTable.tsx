import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Bet {
  id: number;
  creator: string;
  amount: number;
  choice: "heads" | "tails";
  result: "win" | "loss" | "pending";
  prize?: number;
}

export const BetsTable = ({ bets }: { bets: Bet[] }) => {
  return (
    <div className="w-full mt-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Flip</TableHead>
            <TableHead>Creator</TableHead>
            <TableHead>Bet</TableHead>
            <TableHead>Choice</TableHead>
            <TableHead>Results</TableHead>
            <TableHead>Prize</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bets.map((bet) => (
            <TableRow key={bet.id}>
              <TableCell>#{bet.id}</TableCell>
              <TableCell>{bet.creator}</TableCell>
              <TableCell>{bet.amount} $GENIE</TableCell>
              <TableCell className="capitalize">{bet.choice}</TableCell>
              <TableCell className="capitalize">{bet.result}</TableCell>
              <TableCell>{bet.prize || "-"} $GENIE</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};