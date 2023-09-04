"use client"
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";
import { useState } from "react";
import Horarios from "./horarios";

 
export function Cancha2() {
  const [open, setOpen] =useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
 
  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);
  return (
    <div className="flex items-center justify-center mb-8">
    <div>
      <Card
        className="h-64 w-96 cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
        onClick={handleOpen}
      >
        <img
          alt="nature"
          className="h-full w-full object-cover object-center"
          src="https://static.vecteezy.com/system/resources/previews/003/185/050/large_2x/tennis-court-indoor-illustration-background-design-free-vector.jpg"
        />
        
      </Card>
      </div>
      <Dialog size="xl" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              src ="https://static.vecteezy.com/system/resources/previews/003/185/050/large_2x/tennis-court-indoor-illustration-background-design-free-vector.jpg"
            />
            <div className="-mt-px flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium"
              >
                Cancha 2
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-xs font-normal"
              >
              </Typography>
            </div>
          </div>
        </DialogHeader>
        <DialogBody divider={true} className="p-0">
          <Horarios></Horarios>
        </DialogBody>
        <DialogFooter className="justify-between">
        </DialogFooter>
      </Dialog>
    </div>
  );
}