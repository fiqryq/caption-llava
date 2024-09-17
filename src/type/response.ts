type T_Response = {
  model: string;
  created_at: Date;
  response: string;
  done: boolean;
  done_reason: string;
  context: any[];
  total_duration: number;
  load_duration: number;
  prompt_eval_duration: number;
  eval_count: number;
  eval_duration: number;
};

export { T_Response };
