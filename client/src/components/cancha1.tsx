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

 
export function Cancha1() {
  const [open, setOpen] =useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
 
  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);
  return (
    <> <div className="flex items-center justify-center m-20">
        <div >
      <Card
        className="h-64 w-96 cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
        onClick={handleOpen}
      >
        <img
          alt="nature"
          className="h-full w-full object-cover object-center"
          src="https://static.vecteezy.com/system/resources/previews/003/185/057/non_2x/tennis-field-outdoor-illustration-background-design-free-vector.jpg"
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
              src ="https://static.vecteezy.com/system/resources/previews/003/185/057/non_2x/tennis-field-outdoor-illustration-background-design-free-vector.jpg"
            />
            <div className="-mt-px flex flex-col">
              <Typography variant="small" color="blue-gray"  className="font-medium"
              >
                Cancha N1
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
      {/* Segunda carta */}
    </div>
    </>
  );
}