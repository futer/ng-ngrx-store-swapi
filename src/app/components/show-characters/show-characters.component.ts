import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store} from '@ngrx/store';
import { AppState } from '../../app.state';
import { GetCharacter } from '../../store/actions/character.actions';

@Component({
  selector: 'app-show-characters',
  templateUrl: './show-characters.component.html',
  styleUrls: ['./show-characters.component.scss']
})
export class ShowCharactersComponent implements OnInit {

  public characters$: Observable<any[]>;
  public selectedMovies: any[] = [];
  public movies$: Observable<any[]>;
  public showModal = false;
  public characeterName: String;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new GetCharacter(null));
    this.characters$ = this.store.select('character');
  }

  openMoviesDetails(event) {
    this.showModal = !this.showModal;
    this.characeterName = event.name;
    this.selectedMovies = [];
    event.films.map(res => {
      res.subscribe(ress => {
        this.selectedMovies.push(ress.title);
      });
    });
  }

}
