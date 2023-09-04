import { Button, Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Horario", "Estado", "Fecha", ""];
 
const TABLE_ROWS = [
  {
    name: "10:00",
    job: "Turno Disponible",
    date: "23/04/18",
  },
  {
    name: "12:00",
    job: "Turno Disponible",
    date: "23/04/18",
  },
  {
    name: "14:00",
    job: "Turno Disponible",
    date: "19/09/17",
  },
  {
    name: "16:00",
    job: "Turno Disponible",
    date: "24/12/08",
  },
  {
    name: "18:00",
    job: "Turno Disponible",
    date: "04/10/21",
  },
  {
    name: "20:00",
    job: "Turno No Disponible",
    date: "04/10/21",
  },{
    name: "22:00",
    job: "Turno No Disponible",
    date: "04/10/21",
  },{
    name: "00:00",
    job: "Turno No Disponible",
    date: "04/10/21",
  },
];
 
const Horarios = () => {
    return (
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, job, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
     
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {name}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {job}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {date}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                        <Button>Reservar</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      );
}
 
export default Horarios;


