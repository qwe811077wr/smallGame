
/**
 * AStar pathfinding
 * @author chenkai
 * @since 2017/11/3
 */
namespace astar{
	export class AStar
	{
		private _open:Array<any>;               //Waiting list
		private _closed:Array<any>;             //Investigated table
		private _grid:astar.Grid;               //grid
		private _endNode:Node;                  //EndNode
		private _startNode:Node;                //Starting pointNode
		private _path:Array<any>;               //Save path
		private _heuristic:Function;            //Wayfinding algorithm
		private _straightCost:number = 1.0;     //The price of going up, down, left and right
		private _diagCost:number = Math.SQRT2;  //The cost of walking sideways 
		
		
		public constructor()
		{	
			//this._heuristic = this.manhattan;  
			//this._heuristic = this.euclidian;
			this._heuristic = this.diagonal;
		}
		
		//Pathfinding
		public findPath(grid:Grid):boolean
		{
			this._grid = grid;
			this._open = [];
			this._closed = [];
			
			this._startNode = this._grid.startNode;
			this._endNode = this._grid.endNode;
			
			this._startNode.g = 0;
			this._startNode.h = this._heuristic(this._startNode);
			this._startNode.f = this._startNode.g + this._startNode.h;
			
			return this.search();
		}
		
		//Find path
		public search():boolean
		{
			var node:Node = this._startNode;
			while(node != this._endNode)
			{
				var startX = Math.max(0, node.x - 1);
				var endX = Math.min(this._grid.numCols - 1, node.x + 1);
				var startY = Math.max(0, node.y - 1);
				var endY = Math.min(this._grid.numRows - 1, node.y + 1);
				
				for(var i = startX; i <= endX; i++)
				{
					for(var j = startY; j <= endY; j++)
					{	
						//Don't let go sideways
						// if(i != node.x && j != node.y){
						// 	continue;
						// }

						var test:Node = this._grid.getNode(i, j);
						if(test == node || 
							!test.walkable ||
							!this._grid.getNode(node.x, test.y).walkable ||
							!this._grid.getNode(test.x, node.y).walkable)
						{
							continue;
						}
						
						var cost:number = this._straightCost;
						if(!((node.x == test.x) || (node.y == test.y)))
						{
							cost = this._diagCost;
						}
						var g = node.g + cost * test.costMultiplier;
						var h = this._heuristic(test);
						var f = g + h;
						if(this.isOpen(test) || this.isClosed(test))
						{
							if(test.f > f)
							{
								test.f = f;
								test.g = g;
								test.h = h;
								test.parent = node;
							}
						}
						else
						{
							test.f = f;
							test.g = g;
							test.h = h;
							test.parent = node;
							this._open.push(test);
						}
					}
				}
				for(var o = 0; o < this._open.length; o++)
				{
				}
				this._closed.push(node);
				if(this._open.length == 0)
				{
					console.log("AStar >> no path found"+this._endNode);
					return false
				}
				
				let openLen = this._open.length;
				for(let m=0;m<openLen;m++){
					for(let n=m+1;n<openLen;n++){
						if(this._open[m].f > this._open[n].f){
							let temp = this._open[m];
							this._open[m] = this._open[n];
							this._open[n] = temp;
						}
					}
				}

				node = this._open.shift() as Node;
			}
			this.buildPath();
			return true;
		}
		
		//Access path
		private buildPath():void
		{
			this._path = new Array();
			var node:Node = this._endNode;
			this._path.push(node);
			while(node != this._startNode)
			{
				node = node.parent;
				this._path.unshift(node);
			}
		}
		
		public get path()
		{
			return this._path;
		}
		
		//Whether to be checked
		private isOpen(node:Node):boolean
		{
			for(var i = 0; i < this._open.length; i++)
			{
				if(this._open[i] == node)
				{
					return true;
				}
			}
			return false;
		}
		
		//Checked or not
		private isClosed(node:Node):boolean
		{
			for(var i = 0; i < this._closed.length; i++)
			{
				if(this._closed[i] == node)
				{
					return true;
				}
			}
			return false;
		}
		
		//Manhattan algorithm
		private manhattan(node:Node)
		{
			return Math.abs(node.x - this._endNode.x) * this._straightCost + Math.abs(node.y + this._endNode.y) * this._straightCost;
		}
		

		private euclidian(node:Node)
		{
			var dx = node.x - this._endNode.x;
			var dy = node.y - this._endNode.y;
			return Math.sqrt(dx * dx + dy * dy) * this._straightCost;
		}
		
		private diagonal(node:Node)
		{
			var dx = Math.abs(node.x - this._endNode.x);
			var dy = Math.abs(node.y - this._endNode.y);
			var diag = Math.min(dx, dy);
			var straight = dx + dy;
			return this._diagCost * diag + this._straightCost * (straight - 2 * diag);
		}
		
		public get visited()
		{
			return this._closed.concat(this._open);
		}
	}

}