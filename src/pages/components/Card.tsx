import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Spline from '@splinetool/react-spline';

export default function ImgMediaCard() {
  return (
    <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:flex-wrap justify-center gap-4 mt-10">
      <Card sx={{ maxWidth: 300, height: 350 }}>
        <div className="w-full">
          <Spline scene="https://prod.spline.design/qbco6US1QWcakV2q/scene.splinecode" />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Premium
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            $ 19/month
          </Typography>
          <Typography variant="body2" color="text.secondary">
            All Standard features
          </Typography>
          <Typography variant="body2" color="text.secondary">
            2 months free
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 300, height: 350 }}>
        <div className="w-full">
          <Spline scene="https://prod.spline.design/1IeZyN-hj65sHnH1/scene.splinecode" />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Standard
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            $0.99/month
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Standard features
          </Typography>
          <Typography variant="body2" color="text.secondary">
            15 Days free
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 300, height: 350 }}>
        <div className="w-full">
          <Spline scene="https://prod.spline.design/iLnPhqksdGZa0CI0/scene.splinecode" />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Premium Pro
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            $29/month
          </Typography>
          <Typography variant="body2" color="text.secondary">
            All Premium features
          </Typography>
          <Typography variant="body2" color="text.secondary">
            6 months free
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
