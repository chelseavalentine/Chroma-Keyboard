var keys = ['#key1', '#key2', '#key3', '#key4', '#key5', '#key6', '#key7',
'#key8', '#key9', '#key10', '#key11', '#key12', '#key13', '#key14', '#key15', '#key16', '#key17', '#key18', '#key19', '#key20', '#key21', '#key22', '#key23', '#key24', '#key25', '#key26', '#key27', '#key28'];

var registers = ['C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4', 'C5', 'C#5', 'D5', 'D#5']

//For white key
function keyed (number){
	$(keys[number] + ", " + keys[number] + "name").mousedown(
		function(){
			$(keys[number]).css({
				"background-color": "#f9f9f9",
				"border-right": "solid #BDBDBD 2px",
				"border-bottom": "solid #BDBDBD 2px"
			})
			beeplay()
			.play(registers[number], 1)

		}
	)
	$(keys[number] +", " + keys[number]+"name").hover(function(){
			$(keys[number]+"name").transition({
			opacity: 1
			}, 0)
		},
		function(){
			$(keys[number] + "name").transition({
				opacity: 0.4
			}, 0)
		}
	)
	$(keys[number] + ", " + keys[number] + "name").mouseup(
		function(){
			$(keys[number]).css({
				"background-color": "#F5F5F5",
				"border-right": "solid #E0E0E0 2px",
				"border-bottom": "solid #E0E0E0 2px"
			})
		})
}

//For black keys
function blackkeyed (number){
	$(keys[number] + ", " + keys[number] + "name").mousedown(
		function(){
			$(keys[number]).css({
				"background-color": "#202020",
				"border-right": "solid black 2px",
				"border-bottom": "solid black 2px"
			})
			beeplay()
			.play(registers[number], 1)
		}
	)
	$(keys[number] +", " + keys[number]+"name").hover(function(){
			$(keys[number]+"name").transition({
			opacity: 1
			}, 0)
		},
		function(){
			$(keys[number] + "name").transition({
				opacity: 0.4
			}, 0)
		}
	)
	$(keys[number] + ", " + keys[number] + "name").mouseup(
		function(){
			$(keys[number]).css({
				"background-color": "black",
				"border-left": "solid #424242 3px",
				"border-bottom": "solid #424242 2px",
				"border-right": "solid black 1px"
			})
		})
}
keyed(0);
blackkeyed(1);
keyed(2);
blackkeyed(3);
keyed(4);
keyed(5);
blackkeyed(6);
keyed(7);
blackkeyed(8);
keyed(9);
blackkeyed(10);
keyed(11);
keyed(12);
blackkeyed(13);
keyed(14);
blackkeyed(15);
keyed(16);
keyed(17);
blackkeyed(18);
keyed(19);
blackkeyed(20);
keyed(21);
blackkeyed(22);
keyed(23);
keyed(24);
blackkeyed(25);
keyed(26);
blackkeyed(27);
