import { NgModule } from "@angular/core";
import { RouterModule , Routes } from "@angular/router";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { EventsComponent } from "./components/events/events.component";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path:'list', component: ListRenderComponent},
  {path:'event', component: EventsComponent},
  {path:'emitter', component: EmitterComponent},
]

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}